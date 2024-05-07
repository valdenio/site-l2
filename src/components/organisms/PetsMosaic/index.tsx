import React from 'react';
import { PeopleMosaicSection } from './styled';
import PeopleCardList from '../../molecules/PeopleCardList';
import { colors } from '../../../styles/colors';

export default function PetsMosaic() {
  const [pets, setPets] = React.useState([]);
  const petsArray = [
    {
      images: ['Luna.png'],
      folder: 'pets',
      firstName: 'Luna',
      location: 'Madame arteira',
    },
    {
      images: ['Sofia.png'],
      folder: 'pets',
      firstName: 'Sofia',
      location: 'Sorriso resplandecente',
    },
    {
      images: ['Laica.png'],
      folder: 'pets',
      firstName: 'Laica',
      location: 'Muito nenê',
    },
    {
      images: ['Tom_Bud.png'],
      folder: 'pets',
      firstName: 'Bruna',
      location: 'Estão sempre a mimir',
    },
    {
      images: ['Batman.png'],
      folder: 'pets',
      firstName: 'Batman',
      location: 'Vigilante da madrugada',
    },
    {
      images: ['Cheddar.png'],
      folder: 'pets',
      firstName: 'Cheddar',
      location: 'Ligado no 220V',
    },
    {
      images: ['Oliver.png'],
      folder: 'pets',
      firstName: 'Oliver',
      location: 'O preguiçoso',
    },
    {
      images: ['Cacau.png'],
      folder: 'pets',
      firstName: 'Cacau',
      location: 'A fofinha',
    },
    {
      images: ['Pretinho.png'],
      folder: 'pets',
      firstName: 'Pretinho',
      location: 'Ama uma bagunça',
    },
    {
      images: ['Pompom_Wanda_Baby_Bolinha.webp'],
      folder: 'pets',
      firstName: 'Pompom, Wanda, Baby e Bolinha',
      location: 'O quarteto miáustico',
    },
    {
      images: ['Suzy.webp'],
      folder: 'pets',
      firstName: 'Suzy',
      location: 'Arteira e dorminhoca',
    },
    {
      images: ['Mini.webp'],
      folder: 'pets',
      firstName: 'Mini',
      location: 'A rainha da casa',
    },
    {
      images: ['Kora.webp'],
      folder: 'pets',
      firstName: 'Kora',
      location: 'Sempre do teu lado',
    },
    {
      images: ['Tofu.png'],
      folder: 'pets',
      firstName: 'Tofu',
      location: 'O mimadinho',
    },
    {
      images: ['Feijao.png'],
      folder: 'pets',
      firstName: 'Feijão',
      location: 'Adora roer um fio',
    },
    {
      images: ['Gata.png'],
      folder: 'pets',
      firstName: 'Gata',
      location: 'Adora dormir em cima do computador e desligar ele 😅',
    },
    {
      images: ['Petit.png'],
      folder: 'pets',
      firstName: 'Petit',
      location: 'Caça rato',
    },
    {
      images: ['Rebeca.png'],
      folder: 'pets',
      firstName: 'Rebeca',
      location: 'Ciumenta que dói',
    },
    {
      images: ['Boby.png'],
      folder: 'pets',
      firstName: 'Boby',
      location: 'Completamente maluco',
    },
    {
      images: ['Charlotte.png'],
      folder: 'pets',
      firstName: 'Charlotte',
      location: 'Uma lady',
    },
    {
      images: ['Apolo.png'],
      folder: 'pets',
      firstName: 'Apolo',
      location: 'Sempre gerando encrenca',
    },
    {
      images: ['Alice.png'],
      folder: 'pets',
      firstName: 'Alice',
      location: 'Adora ficar na volta de quem está trabalhando',
    },
    {
      images: ['Peri.png'],
      folder: 'pets',
      firstName: 'Peri',
      location: 'O escandaloso',
    },
  ];
  React.useEffect(() => {
    const petsSort = petsArray.sort((x, y) => {
      const a = x.firstName.toUpperCase();
      const b = y.firstName.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
    });
    setPets(petsSort);
  }, []);
  return (
    <PeopleMosaicSection>
      <PeopleCardList
        position="pets"
        people={pets}
        index={pets.length - 1}
        arrayLength={pets.length}
        bgColor={colors.gray}
        fontColor={colors.black}
      />
    </PeopleMosaicSection>
  );
}
