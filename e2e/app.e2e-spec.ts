import { PokespotMeanV2Page } from './app.po';

describe('pokespot-mean-v2 App', function() {
  let page: PokespotMeanV2Page;

  beforeEach(() => {
    page = new PokespotMeanV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
