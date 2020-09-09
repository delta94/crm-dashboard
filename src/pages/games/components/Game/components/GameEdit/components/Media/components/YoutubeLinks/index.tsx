import React, { useCallback } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Title, Description } from 'pages/games/components/Game/styles';
import { PurpleOutlinedButton, Caption12, RED_500 } from 'admin-library';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

import LinkInput from './components/LinkInput';

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

interface Props {
  className?: string;
  links: { id: number; url: string }[];
  onChange: (name: string, value: any) => void;
}

const YoutubeLinks = (props: Props) => {
  const { className, links, onChange } = props;
  const { t } = useTranslation();

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    const newLinks = reorder(links, source.index, destination.index);

    onChange('links', newLinks);
  };

  const handleAddLink = () => {
    onChange('links', [...links, { id: Date.now(), url: '' }]);
  };

  const handleDelete = useCallback((index: number) => {
    const newLinks = [...links.slice(0, index),...links.slice(index + 1)];

    onChange('links', newLinks);
    // eslint-disable-next-line
  }, [links]);

  return (
    <Wrapper className={className}>
      <Title>{t('game.fields.game_video.label')}</Title>
      <Description>
        {t('game.fields.game_video.description')}
        <Warning>
          {t('game.fields.game_video.warning')}
        </Warning>
      </Description>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {links.map(({ id, url }, index) => {
                return (
                  <Draggable key={id} draggableId={String(id)} index={index}>
                    {provided => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <LinkInput
                          key={index}
                          link={url}
                          index={index}
                          onDelete={handleDelete}
                          onChange={onChange}
                          name={`links[${index}].url`}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <PurpleOutlinedButton
        onClick={handleAddLink}
        type="button"
      >
        {`+ ${t('game.fields.game_video.add_link')}`}
      </PurpleOutlinedButton>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(YoutubeLinks, areEqual);

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const Warning = styled(Caption12).attrs({ color: RED_500 })`
  display: block;
  margin-top: 4px;
`;
