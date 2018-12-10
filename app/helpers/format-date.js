import { helper } from '@ember/component/helper';

export function formatDate(params){
  return moment(params[0]).fromNow();
}

export default helper(formatDate);
