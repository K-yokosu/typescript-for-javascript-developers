export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro';
nickname = 'Ham';

let profile = {
  name: 'Atsushi',
  height: 178
} as const;
// profileにreadonlyがつく

// profile.name = 'Ham';
// profile.height = 180;