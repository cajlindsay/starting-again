import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default function _dirname(url) {
  const _dirname = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(url));

  return _dirname;
}
