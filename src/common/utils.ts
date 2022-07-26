import dayjs from 'dayjs';
import { IContract } from '../redux/companies/types';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export const getPhone = (value: string) => {
  return value.toString().replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, `+$1 ($2)-$3-$4-$5`);
};

export const adaptPhoneForServer = (value: string) => {
  return value.toString().replace(/\D/g, '');
};

export const isEmail = (value: string) => {
  const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return reg.test(value);
};

export const adaptContractFromServer = (value: IContract) => {
  const { no, issue_date } = value;
  const date = dayjs(issue_date).format('DD.MM.YYYY');

  return `${no} от ${date}`;
};

export const adaptTypeFromServer = (value: string[]) => {
  const translate = value.map((item) => {
    switch (item) {
      case 'agent':
        return 'Агент';
      case 'contractor':
        return 'Подрядчик';
      default:
        return item;
    }
  });

  return translate.join(', ');
};

export const adaptTypeForServer = (value: string) => {
  const array = value.toLowerCase().split(', ');

  return array.map((item) => {
    switch (item) {
      case 'агент':
        return 'agent';
      case 'подрядчик':
        return 'contractor';
      default:
        return item;
    }
  });
};

export const adaptContractForServer = (value: string) => {
  const result = value.split('от');
  dayjs.extend(customParseFormat);
  const date = dayjs(result[1], 'DD.MM.YYYY');
  return {
    no: result[0],
    issue_date: dayjs(date).toISOString(),
  };
};

export const adaptFullNameForServer = (value: string) => {
  const result = value.split(' ');
  return {
    lastname: result[0],
    firstname: result[1],
    patronymic: result[2] && result[2],
  };
};
