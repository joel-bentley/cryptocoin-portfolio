import moment from 'moment';

const ID_LENGTH = 8;
const ID_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789-_';

export function generateRandomId(length = ID_LENGTH, characters = ID_CHARS) {
  return Array(length)
    .fill()
    .map(() => characters[Math.floor(Math.random() * characters.length)])
    .join('');
}

export function formatDate(date, format = 'YYYY-MM-DD') {
  return moment(date).format(format);
}
