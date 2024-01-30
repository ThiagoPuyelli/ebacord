//import unity from '../public/img/unity.png'
import digitalTools from '../public/img/digitalTools.png'
import design from '../public/img/design.png'
import { ICourse } from '../pages/course'

const courses: ICourse[] = [
  {
    name: 'HERRAMIENTAS DIGITALES',
    description: 'Taller para enseñar mediante la práctica y el ejercicio diversas capacidades personales que permita lograr trabajos y publicaciones de mayor calidad',
    color: '#1c1d1f',
    price: 'XXXXX',
    info: [
      '8 semanas',
      '2 horas de clase semanal',
    ],
    image: digitalTools,
    learning: [
      'Redes sociales y manejo de presencia digital',
      'Introducción al SEO y reformulación de textos',
      'Presentaciones en Powerpoint',
      'Herramientas de comunicación',
      'Manejo de archivos en la nube'
    ],
    difficulty: 'intermedio',
    content: [
      'Introducción',
      'Programacion en c#',
      'Materiales y texturas',
      'Iluminación',
      'Partículas',
      'Físicas 3d'
    ],
    teachers: [
      1
    ]
  },
  {
    name: 'DISEÑO GRÁFICO PARA VJ',
    description: 'Curso pensado para diseñar y modelar con diferentes herramientas orientado a los videojuegos',
    color: '#1c1d1f',
    price: 'XXXXX',
    info: [
      '24 horas',
      '2 horas de clase semanal',
    ],
    image: design,
    learning: [
      'Diseño gráfico',
      'Blender',
      'Piskel',
      'Lunacy',
      'Photoshopea'
    ],
    difficulty: 'basica',
    content: [
      'El diseño gráfico en la industria de los videojuegos',
      'Elementos del diseño',
      'Psicología de las formas. Que representan las mismas y como aplicarlas',
      'Diferentes elementos gráficos de un VJ',
      'Herramientas del diseño',
      'Character design',
      'Pixelart',
      'Lunacy herramientas'
    ],
    teachers: [
      1
    ]
  }
]

export default courses