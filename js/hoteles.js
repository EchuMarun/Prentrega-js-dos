const hoteles = {
    'Buenos Aires': [
        {
            id: 1,
            imagen: 'https://media.staticontent.com/media/pictures/c35c77b2-0238-449f-9aa0-3ef9e3137ef4/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Hotel elegante en el corazón de Buenos Aires',
            precio: 15000
        },
        {
            id:2,
            imagen: 'https://media.staticontent.com/media/pictures/290b466b-2505-4e42-afdb-cf87cb33e142/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Alojamiento moderno con vistas impresionantes',
            precio: 20000
        },
        {
            id:3,
            imagen: 'https://media.staticontent.com/media/pictures/ee76aa65-a393-4c02-90ff-4e65907d6217/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Hotel de lujo con todas las comodidades',
            precio: 25000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/290b466b-2505-4e42-afdb-cf87cb33e142/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Hotel cerca de los puntos turísticos',
            precio: 12000
        }
    ],
    'Catamarca': [
        {
            imagen: 'https://media.staticontent.com/media/pictures/c35c77b2-0238-449f-9aa0-3ef9e3137ef4/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Alojamiento tranquilo con ambiente relajante',
            precio: 10000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel con piscina y hermosos jardines',
            precio: 12000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Alojamiento familiar con excelente atención al cliente',
            precio: 90000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel boutique en el corazón de Catamarca',
            precio: 18000
        }
    ],
    'Chaco': [
        {
            imagen: 'https://media.staticontent.com/media/pictures/c35c77b2-0238-449f-9aa0-3ef9e3137ef4/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Alojamiento tranquilo con ambiente relajante',
            precio: 10000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel con piscina y hermosos jardines',
            precio: 12000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Alojamiento familiar con excelente atención al cliente',
            precio: 90000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel boutique en el corazón de Catamarca',
            precio: 18000
        }
    ],
    'Chubut': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/209097564.jpg?k=dbc08956397540c89cfcf9071cfd769217685b491c854b5505ec8091ee60e28a&o=',
            descripcion: 'Cabaña Lago Puelo, chubut, 2 dor, 2 baños full confort',
            precio: 10000
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/157667570.jpg?k=2c62b6c8ffeb371bf35d581ceab75f580afca3680e14dec98c8609a77fe650fd&o=',
            descripcion: 'Chubut - Maiten - Arroyo las Minas',
            precio: 8050
        },
    ],
    'Córdoba': [
        {
            imagen: 'http://images.almundo.com/203/original/11/112920/112920a_hb_r_001.jpg',
            descripcion: 'King David Flat Hotel',
            precio: 46500
        },
        {
            imagen: 'http://images.almundo.com/203/original/12/128133/128133a_hb_r_001.jpg',
            descripcion: 'Windsor Hotel & Tower Argentina',
            precio: 67200
        },
        {
            imagen: 'https://images.almundo.com/201/1000000/480000/477600/477592/9938c883_z.jpg',
            descripcion: 'Holiday Inn Córdoba',
            precio: 70319
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/16503621.jpg?k=b5406547683d92ed06e154e14f9b3be67abed81328c662940fab40a4e96a0792&o=',
            descripcion: 'Hotel Felipe II',
            precio: 34320
        }
    ],
    'Corrientes': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/363084262.jpg?k=fd7c72dcc4761c64556e793a2f5e5ffb81251b87cdefa52ed4906550b2767d8e&o=',
            descripcion: 'Pai Pajarito',
            precio: 23392
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/267582767.jpg?k=883f6abee779bb4285e8819186167484d20327ba5b4e7795d2795782a9208188&o=',
            descripcion: 'Departamento de diseño en el corazón de la ciudad',
            precio: 35830
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/209332689.jpg?k=474ecd66a3edafee1fb9fc211360df3d9ee3d5031904f94b97f29adab01a2e98&o=',
            descripcion: 'Hospedaje El Paye',
            precio: 11514
        },
        {
            imagen: 'http://images.almundo.com/203/original/75/751832/751832a_hb_r_001.jpg',
            descripcion: 'La Alondra Casa De Huéspedes',
            precio: 84914
        }
    ],
    'Entre Ríos': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/177432695.jpg?k=326d2b09f4a152aa3352911c0e2be2b167588016fd1260a1e2485219449bb633&o=',
            descripcion: 'Gran Hotel Parana',
            precio: 42015
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/258320215.jpg?k=32025081ff01ab04102fad124e1ea16ec8eead6ad5f8a06d8e27653f47a4a0e3&o=',
            descripcion: 'Maran Suites & Towers',
            precio: 49075
        },
        {
            imagen: 'http://images.almundo.com/203/original/55/550705/550705a_hb_r_001.jpg',
            descripcion: 'Howard Johnson Plaza Hotel Mayorazgo',
            precio: 55228
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/82462323.jpg?k=77d6d7ccf645e9a7ee6d35a56311baca29ac9bd26f555f5f7c5043fca78ecd12&o=',
            descripcion: 'Hotel Posta del Sol Paraná',
            precio: 27420
        }
    ],
    'Formosa': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/168885893.jpg?k=4919a5b33c1104b1207699b09f3006afa6b200d7933054fa57feaa515d816252&o=',
            descripcion: 'Apartamento Uriburu',
            precio: 17750
        },
        {
            imagen: 'http://images.almundo.com/203/original/55/555002/555002a_hb_r_002.jpg',
            descripcion: 'Howard Johnson Hotel And Casino Formosa',
            precio: 43340
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/464957531.jpg?k=e22be3ea5a2b7a533dc9d164e57e2e972b3dd6e4ee1f9f41cb58c57b7ec70141&o=',
            descripcion: 'ALFA SWEET APARTS',
            precio: 16448
        },
    ],
    'Jujuy': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/174701914.jpg?k=f86f69d80dc8f1374831c0937838d6fa70d8d06edcf05aca8a6a18b37f9b10b2&o=',
            descripcion: 'Guest House Jujuy',
            precio: 21621
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/332047537.jpg?k=1ae8535a00556384d3d841bbd8275860bef8585e00c022b89225f5fb30066cbf&o=',
            descripcion: 'La Casa de Reyes Posada',
            precio: 22113
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/162408076.jpg?k=457f998fdf2f3dca8af03b332f5841916b58e6d6bd9ace9969152ce70ae6f134&o=',
            descripcion: 'Cabañas Rosaverde',
            precio: 28747
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/401613526.jpg?k=0ffd75bf150e622478b5b6e9be77391f5c1f0112de4ed83063e6de0cce1d24ec&o=',
            descripcion: 'Barrancas de Nieva B01',
            precio: 43780
        }
    ],
    'La Pampa': [
        {
            imagen: 'https://images.almundo.com/205/image/fetch/fl_progressive,q_auto,c_fill,g_auto,w_319/https://images.almundo.com/207/max1024x768/202961935.jpg?k=2d7e2d801f0d6573ff79df372be3eeb3fb81d615a596cc4a851c5035e3864555&o=',
            descripcion: ' En La Plata Hostel El Pampa',
            precio: 18670
        },
    ],
    'La Rioja': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/171459083.jpg?k=a2439eb840b236a16c601545dbf3ba65a7a36e084022aac6c8f312d73a8f6e4a&o=',
            descripcion: 'La Guadalupe Cabañas',
            precio: 47300
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/303383996.jpg?k=270bbc02937679e2a36968fec8c45eff497b16c9ee2bc989fecf57d5ea9b8a0a&o=',
            descripcion: 'Departamentos Temporales Alberdi',
            precio: 22998
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/286969361.jpg?k=5e6e8e37b658e4f67624d7d09ef7aa8a9b34702640e586f79bff8f6151288d2c&o=',
            descripcion: 'Edificio Huayra',
            precio: 28898
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/56079245.jpg?k=be663816b0024144b9ee5056b7e07dd2583615b3e5be646d6e190566a266a67b&o=',
            descripcion: 'COMPLEJO DOÑA OLGA',
            precio: 29199
        }
    ],
    'Mendoza': [
        {
            imagen: 'http://images.almundo.com/203/original/25/254413/254413a_hb_r_001.jpg',
            descripcion: 'Park Hyatt Mendoza',
            precio: 199015
        },
        {
            imagen: 'http://images.almundo.com/203/original/12/120062/120062a_hb_l_001.jpg',
            descripcion: 'Amerian Executive Mendoza Hotel',
            precio: 103409
        },
        {
            imagen: 'http://images.almundo.com/203/original/14/148062/148062a_hb_r_004.jpg',
            descripcion: 'Sheraton Mendoza',
            precio: 176902
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/377565122.jpg?k=c663ba099521051abe4a66b4f964c7092196e9c3438e29f84e037a1d5abec45f&o=',
            descripcion: 'Gran Hotel Dakar',
            precio: 104000
        }
    ],
    'Misiones': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/97814678.jpg?k=50cd86f9c16a077a376708f37a55c659859bf00db97e2ae527074476e7307c1e&o=',
            descripcion: 'Panoramic Grand - Iguazú',
            precio: 168057
        },
        {
            imagen: 'http://images.almundo.com/203/original/54/548302/548302a_hb_a_001.jpg',
            descripcion: 'Falls Iguazu Hotel & SPA',
            precio: 139137
        },
        {
            imagen: 'https://images.almundo.com/201/1000000/450000/444500/444401/d069a0f6_z.jpg',
            descripcion: 'Exe Hotel Cataratas',
            precio: 47515
        },
        {
            imagen: 'http://images.almundo.com/203/original/14/145369/145369a_hb_p_006.jpg',
            descripcion: 'Gran Melia Iguazu',
            precio: 358222
        }
    ],
    'Neuquén': [
        {
            imagen: 'http://images.almundo.com/203/original/55/550175/550175a_hb_r_001.jpg',
            descripcion: 'Howard Johnson Neuquen',
            precio: 61697
        },
        {
            imagen: 'http://images.almundo.com/203/original/70/706904/706904a_hb_r_001.jpg',
            descripcion: 'Hotel con piscina y hermosos jardines',
            precio: 81818
        },
        {
            imagen: 'http://images.almundo.com/203/original/62/623803/623803a_hb_r_001.jpg',
            descripcion: 'Cyan Soho Neuquen Hotel',
            precio: 89339
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/415934745.jpg?k=151b6e79f8f8d040b10403306d38f4d9dffa40226ad4d5d9f30439e753bfd04f&o=',
            descripcion: 'El Prado',
            precio: 48690
        }
    ],
    'Río Negro': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/398925628.jpg?k=27eea51ea17d2b3aa3d25c812a3a03799f497a09212ef8ce9d4b0a8f6986a134&o=',
            descripcion: 'Rio Negro Loft',
            precio: 40205
        },
    ],
    'Salta': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/42160902.jpg?k=f9a0bbd18fbd3cdda802acec321b9d9637180289aa1c40f78ef77c5841495664&o=',
            descripcion: 'Solar De La Plaza',
            precio: 72278
        },
        {
            imagen: 'https://images.almundo.com/201/2000000/1440000/1430300/1430239/1c3fd478_z.jpg',
            descripcion: 'Alejandro I Hotel',
            precio: 172922
        },
        {
            imagen: 'http://images.almundo.com/203/original/10/106256/106256a_hb_r_003.jpg',
            descripcion: 'Design Suites Salta',
            precio: 119852
        },
        {
            imagen: 'https://images.almundo.com/201/2000000/1300000/1293600/1293511/2d430e96_z.jpg',
            descripcion: 'Sheraton Salta Hotel',
            precio: 189523
        }
    ],
    'San Juan': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/377883237.jpg?k=f31694d02d4e587da7fb92c3ae26dec08ed11246abb58bf9aca034d8dd745be8&o=',
            descripcion: 'Hotel San Francisco',
            precio: 15922
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/52159165.jpg?k=d9388f46803452a5e967b19a6a40e7014f22e0e4c9aef5b1f229308cd4550e35&o=',
            descripcion: 'Hotel Del Bono Park',
            precio: 90760
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/354542759.jpg?k=54819af37c8e54b24abbc308712abdf61226a77a93fae67a3fec2941cd9fd769&o=',
            descripcion: 'VMA Suites- Del Bono',
            precio: 18225
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/132061452.jpg?k=3a6de3985e3f6e491c846793c26484a66f02e2b126615fafede2428a2053be50&o=',
            descripcion: 'Terraza del Sol Apart',
            precio: 29885
        }
    ],
    'San Luis': [
        {
            imagen: "https://images.almundo.com/207/max1024x768/139976555.jpg?k=c7010915c7641fb558c77f844669e83ce88a554ea52e708b253929405bf9a61a&o=",
            descripcion: 'Hotel Aiello',
            precio: 22113
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/131270691.jpg?k=ed874033bfb14b70cc7d24090cdb38c25cf11e9085dd989b4f32c6d8ddf99860&o=',
            descripcion: 'Posada el Paraiso',
            precio: 22113
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/27899818.jpg?k=7c316871c14f4c35ffc3275b94d63eb98965b48d95f4718d902167526806c807&o=',
            descripcion: 'Quintana Hotel',
            precio: 35381
        },
        {
            imagen: 'https://images.almundo.com/201/3000000/2790000/2784400/2784398/0cfa0666_z.jpg',
            descripcion: 'Epic Hotel San Luis',
            precio: 48458
        }
    ],
    'Santa Cruz': [
        {
            imagen: 'https://media.staticontent.com/media/pictures/579ac7b9-8c78-46c9-9c6a-e10bbd7dc1d3/316x311?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Avellaneda suites',
            precio: 19001
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/44722281.jpg?k=73e67e169498be531a3c792bfea696f93151f81198bea5a31f2ed7e94fdd983a&o=',
            descripcion: 'Hotel Patagonia',
            precio: 53071
        },
    ],
    'Santa Fe': [
        {
            imagen: 'https://images.almundo.com/207/max1024x768/188448674.jpg?k=d8ea028b895e4c3785eada45baffae9c8b904aeaca9fd241e737c33cd548993f&o=',
            descripcion: 'Hotel Hernandarias',
            precio: 25001
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/34536717.jpg?k=b65b78b4b24f7793063a4a7398377be9ccbbcb0986eca88b64c2fc393e500f32&o=',
            descripcion: 'Conquistador Hotel',
            precio: 30202
        },
        {
            imagen: 'http://images.almundo.com/203/original/75/751795/751795a_hb_r_001.jpg',
            descripcion: 'Intertower Hotel',
            precio: 53305
        },
        {
            imagen: 'https://images.almundo.com/207/max1024x768/477083698.jpg?k=ca1817e604b00a7a0e98dbd6fec536fa3daab344aeea16cf4075505669b13d2c&o=',
            descripcion: 'Ambit Boulevard Hotel Boutique',
            precio: 38638
        }
    ],
    'Santiago del Estero': [
        {
            imagen: 'https://media.staticontent.com/media/pictures/579ac7b9-8c78-46c9-9c6a-e10bbd7dc1d3/316x311?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Alojamiento tranquilo con ambiente relajante',
            precio: 10000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel con piscina y hermosos jardines',
            precio: 12000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Alojamiento familiar con excelente atención al cliente',
            precio: 90000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel boutique en el corazón de Catamarca',
            precio: 18000
        }
    ], 
    'Tierra del Fuego': [
        {
            imagen: 'https://media.staticontent.com/media/pictures/579ac7b9-8c78-46c9-9c6a-e10bbd7dc1d3/316x311?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Alojamiento tranquilo con ambiente relajante',
            precio: 10000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel con piscina y hermosos jardines',
            precio: 12000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Alojamiento familiar con excelente atención al cliente',
            precio: 90000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel boutique en el corazón de Catamarca',
            precio: 18000
        }
    ],    
    'Tucumán': [
        {
            imagen: 'https://media.staticontent.com/media/pictures/579ac7b9-8c78-46c9-9c6a-e10bbd7dc1d3/316x311?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1',
            descripcion: 'Alojamiento tranquilo con ambiente relajante',
            precio: 10000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel con piscina y hermosos jardines',
            precio: 12000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Alojamiento familiar con excelente atención al cliente',
            precio: 90000
        },
        {
            imagen: 'https://media.staticontent.com/media/pictures/d58c7716-ef7d-4feb-b59c-21060d77ca2d/300x200',
            descripcion: 'Hotel boutique en el corazón de Catamarca',
            precio: 18000
        }
    ],
};


