import logoData from './logoData';
import './style.scss';
import { dataToDict, dataToList } from './transform';

export const logoDict = dataToDict(logoData);
export const logoList = dataToList(logoData);