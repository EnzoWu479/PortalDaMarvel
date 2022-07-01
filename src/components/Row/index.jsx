import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import {
  List,
  ListArea,
  Item,
  Infos,
  Roll,
  Icon,
  Box,
  Details,
  Container,
  Black,
  XIcon,
  Rate,
  Release,
  InfoAdd,
} from './styled';
import Stars from '../Stars';

function Row({ items, type }) {
  const [scrollX, setScrollX] = useState(0);
  const [onSpot, setOnSpot] = useState(null);

  const borda = () => {
    let spaces = 0;
    if (window.innerWidth < 760) {
      spaces = 0;
    } if (window.innerWidth > 1000) {
      spaces = 2;
    } else {
      spaces = 1;
    }
    return ((window.innerWidth - (window.innerWidth * 0.84) - 20
    * spaces) / 2);
  };
  const handleLeftArrow = () => {
    let x = scrollX + window.innerWidth - borda();
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - window.innerWidth + borda();
    const widthMax = (items.length / 3).toFixed(0) * ((window.innerWidth * 0.84) + 40 + borda());
    if ((window.innerWidth - widthMax) > x) {
      x = (window.innerWidth - widthMax) - 60;
    }
    setScrollX(x);
  };

  return (
    <Roll>
      <Icon onClick={handleLeftArrow} className="Nav">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Icon>
      <Icon Right onClick={handleRightArrow} className="Nav">
        <FontAwesomeIcon icon={faArrowRight} />
      </Icon>
      <ListArea>
        <List style={{
          width: items.length * (items.length / 3).toFixed(0) * (1090 + borda()),
          marginLeft: scrollX,
        }}
        >
          {
                        items.length > 0 && items.map((item, key) => (
                          <Container opened={onSpot === key} key={Number(key)}>
                            <Item
                              opened={onSpot === key}
                              style={{
                                backgroundImage: `url(${type === 'Marvel' ? item.thumbnail.path : (`https://image.tmdb.org/t/p/w400${item.poster_path}`)}${type === 'Marvel' ? `.${item.thumbnail.extension}` : ''})`,
                              }}
                            />
                            <Box opened={onSpot === key}>
                              <Infos opened={onSpot === key}>
                                <h1>
                                  {item.title ? item.title : item.name}
                                </h1>
                                {(onSpot !== key || type !== 'Marvel')
                                        && (
                                        <p>
                                          {item.description || item.overview ? item.description || item.overview : 'Sem descrição'}
                                        </p>
                                        )}
                                {
                                            onSpot === key && type !== 'Marvel' && (
                                            <Rate>
                                              Critica
                                              <Stars rate={item.vote_average} />
                                            </Rate>
                                            )
}
                                {
                                            onSpot === key && type === 'Marvel' && item.events.available > 0
                                            && (
                                            <InfoAdd>
                                              <h2>Eventos:</h2>
                                              {item.events.items.map((events, i) => (
                                                i < 5 && <p>{events.name}</p>
                                              ))}
                                            </InfoAdd>
                                            )
                                        }
                                {
                                            onSpot === key && type === 'Marvel' && item.characters
                                            && (
                                            <InfoAdd>
                                              <h2>Personagens: </h2>
                                              {item.characters.items.map((charac, i) => (
                                                i < 5 && <p>{charac.name}</p>
                                              ))}
                                            </InfoAdd>
                                            )
                                        }
                                {
                                            onSpot === key && type === 'Marvel' && item.creators
                                            && (
                                            <InfoAdd>
                                              <h2>Criadores: </h2>
                                              {item.creators.items.map((creators, i) => (
                                                i < 5 && <p>{creators.name}</p>
                                              ))}
                                            </InfoAdd>
                                            )
                                        }
                                {
                                            onSpot === key && type === 'Marvel' && item.comics
                                            && (
                                            <InfoAdd>
                                              <h2>Hqs: </h2>
                                              {item.comics.items.map((hqs, i) => (
                                                i < 5 && <p>{hqs.name}</p>
                                              ))}
                                            </InfoAdd>
                                            )
                                        }
                                {
                                            onSpot === key && type !== 'Marvel' && item.release_date
                                            && (
                                            <Release>
                                              Data de lançamento:
                                              <br />
                                                { `${item.release_date.split('-')[2]}/${item.release_date.split('-')[1]}/${item.release_date.split('-')[0]}`}
                                            </Release>
                                            )
                                        }
                              </Infos>
                              {
                                        onSpot !== key
                                        && (
                                        <Details onClick={() => (setOnSpot(key))}>
                                          Ver Details
                                        </Details>
                                        )
                                    }

                            </Box>
                            {
                                    onSpot === key
                                    && (
                                    <XIcon onClick={() => (setOnSpot(null))}>
                                      <FontAwesomeIcon icon={faCircleXmark} type="regular" />
                                    </XIcon>
                                    )
                                }
                          </Container>
                        ))
                    }
        </List>
      </ListArea>
      {onSpot !== null
                && <Black />}
    </Roll>
  );
}
Row.propTypes = {
  items: PropTypes.arrayOf.isRequired,
  type: PropTypes.string.isRequired,
};

export default Row;
