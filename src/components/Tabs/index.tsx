import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { PURPLE_500, GRAY_100, WHITE, BLACK_600, Micro10 } from 'admin-library';

interface Props {
  className?: string;
  children: ReactNode;
}

const Tabs = (props: Props) => {
  const [active, setActive] = useState(0);
  const { className, children } = props;

  const handleChangeTab = (index: number) => () => {
    setActive(index);
  };

  const labels = React.Children.map(children, (child: any, index) => {
    const label = child.props.label;

    return (
      <Label
        key={label}
        active={active === index}
        onClick={handleChangeTab(index)}
      >
        <Micro10 color={active === index ? WHITE : GRAY_100}>{label}</Micro10>
      </Label>
    );
  });

  const content = React.Children.map(children, (child, index) => index === active ? child : null);

  return (
    <Wrapper className={className}>
      <TabLabels>
        {labels}
      </TabLabels>
      {content}
    </Wrapper>
  );
};

export default React.memo(Tabs);

export const Tab = styled.div<{ label: string }>``;

const Wrapper = styled.div`
  width: 100%;
`;

const TabLabels = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: transparent;
  list-style: none;
  border-bottom: 1px solid ${BLACK_600};
`;

const Label = styled.li<{ active: boolean }>`
  margin: 0 20px -1px 0;
  padding-bottom: 8px;
  border-bottom: 3px solid ${({ active }) => active ? PURPLE_500 : 'transparent'};
  transition: all 150ms ease-in-out;
  cursor: pointer;
`;
