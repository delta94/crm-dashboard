import { GetItemsRequest } from 'types/api';
import { useState, useEffect } from 'react';

interface Result<T> {
  currentItems: T[];
  onItemCreate: () => void;
  total: number;
  page: number;
  loading: boolean;
  rowsPerPage: number;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePage: (event: unknown, newPage: number) => void;
}

function useItemsList<T>(request: GetItemsRequest, itemName: string): Result<T> {
  const [items, setItems] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const start = page * rowsPerPage;
  const end = Math.min((start + rowsPerPage), total);

  const onChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getItems = async () => {
    const { json, error } = await request(start, rowsPerPage);

    if (!error) {
      setItems([...items.slice(0, start), ...json[itemName]]);
      setTotal(json.pagination.total);
    }

    setLoading(false);
  };

  const onItemCreate = () => {
    setItems([]);
    setPage(0);
    getItems();
  };

  useEffect(() => {
    if (items[end - 1]) return;

    getItems();
    // eslint-disable-next-line
  }, [page]);

  const currentItems = items.slice(start, end);

  return {
    currentItems,
    loading,
    page,
    total,
    onItemCreate,
    onChangeRowsPerPage,
    onChangePage,
    rowsPerPage,
  };
}

export default useItemsList;
