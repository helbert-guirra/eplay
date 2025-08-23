import Banner from '../../components/banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows'
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 220,00'],
    system: 'PS4'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['5%', 'R$ 290,00'],
    system: 'XBox'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Zelda é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard Entertainment.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['11/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Star Wars é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard Entertainment.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['24/05'],
    image: star_wars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Resident Evil 4 é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard Entertainment.',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
