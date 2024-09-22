/**
 * @type {import('svgo/lib/svgo').Config}
 */
export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cconvertColors: {
            currentColor: true,
          },
        },
      },
    },
  ],
}
