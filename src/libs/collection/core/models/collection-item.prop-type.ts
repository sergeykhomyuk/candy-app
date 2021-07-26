import PropTypes from 'prop-types';
import { PropertyMap } from 'src/libs/core/types';
import { CollectionItemModel } from './collection-item.model';

const collectionItemPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  ownerImage: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
} as PropertyMap<CollectionItemModel, PropTypes.Validator<unknown>>);

export default collectionItemPropType;
