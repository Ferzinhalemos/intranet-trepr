/// Listing
import IconListingTemplate from './components/Blocks/Listing/IconListingTemplate';
// Blocks
import AreaGridItem from './components/Blocks/Grid/AreaGridItem';
// Views
import AreaView from './components/Views/AreaView';
import PessoaView from './components/Views/PessoaView';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
    image_crop_aspect_ratios: [
      {
        label: '16:9',
        ratio: 16 / 9,
      },
      {
        label: '4:3',
        ratio: 4 / 3,
      },
      {
        label: '1:1',
        ratio: 1,
      },
    ],
  };

  /// Listing
  //// Listing Variations
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'icon-template',
      title: 'Ícones',
      template: IconListingTemplate,
    },
  ];

  // Blocos
  /// Grid
  config.registerComponent({
    name: 'GridListingItemTemplate',
    component: AreaGridItem,
    dependencies: 'Area',
  });

  // Views
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    Area: AreaView,
    Pessoa: PessoaView,
  };
  return config;
};

export default applyConfig;
