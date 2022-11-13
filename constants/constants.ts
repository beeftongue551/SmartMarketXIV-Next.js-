import {ItemDataType} from "../types/ItemDataType";

export const DATA_CENTERS: string[] = ['Mana', 'Gaia', 'Elemental', 'Meteor'] //日本のDC

/* サーバー情報 */
export const SERVERS: Map<string, string[]> = new Map<string, string[]>([
  ['Mana', ['Anima', 'Asura', 'Chocobo', 'Hades', 'Ixion', 'Masamune', 'Pandaemonium', 'Titan']],
  ['Gaia', ['Alexander', 'Bahamut', 'Durandal', 'Fenrir', 'Ifrit', 'Ridill', 'Tiamat', 'Ultima']],
  ['Elemental', ["Aegis", "Atomos", "Carbuncle", "Garuda", "Gungnir", "Kujata", "Tonberry", "Typhon"]],
  ['Meteor', ['Belias', 'Mandragora', 'Ramuh', 'Shinryu', 'Unicorn', 'Valefor', 'Yojimbo', 'Zeromus']]
])



/* クラスジョブ情報 */
export const CLASS_JOBS = [
  {jobName: '全クラス', jobAbbreviation: ''},
  {jobName: '賢者', jobAbbreviation: 'SGE'},
  {jobName: 'リーパー', jobAbbreviation: 'RPR'},
  {jobName: '踊り子', jobAbbreviation: 'DNC'},
  {jobName: 'ガンブレイカー', jobAbbreviation: 'GNB'},
  {jobName: '青魔道士', jobAbbreviation: 'BLU'},
  {jobName: '赤魔道士', jobAbbreviation: 'RDM'},
  {jobName: '侍', jobAbbreviation: 'SAM'},
  {jobName: '占星術師', jobAbbreviation: 'AST'},
  {jobName: '暗黒騎士', jobAbbreviation: 'DRK'},
  {jobName: '機工士', jobAbbreviation: 'MCH'},
  {jobName: '忍者', jobAbbreviation: 'NIN'},
  {jobName: '双剣士', jobAbbreviation: 'ROG'},
  {jobName: '学者', jobAbbreviation: 'SCH'},
  {jobName: '召喚士', jobAbbreviation: 'SMN'},
  {jobName: '巴術士', jobAbbreviation: 'ACN'},
  {jobName: '黒魔道士', jobAbbreviation: 'BLM'},
  {jobName: '白魔道士', jobAbbreviation: 'WHM'},
  {jobName: '吟遊詩人', jobAbbreviation: 'BRD'},
  {jobName: '竜騎士', jobAbbreviation: 'DRG'},
  {jobName: '戦士', jobAbbreviation: 'WAR'},
  {jobName: 'モンク', jobAbbreviation: 'MNK'},
  {jobName: 'ナイト', jobAbbreviation: 'PLD'},
  {jobName: '漁師', jobAbbreviation: 'FSH'},
  {jobName: '園芸師', jobAbbreviation: 'BTN'},
  {jobName: '採掘師', jobAbbreviation: 'MIN'},
  {jobName: '調理師', jobAbbreviation: 'CUL'},
  {jobName: '錬金術師', jobAbbreviation: 'ALC'},
  {jobName: '裁縫師', jobAbbreviation: 'WVR'},
  {jobName: '革細工師', jobAbbreviation: 'LTW'},
  {jobName: '彫金師', jobAbbreviation: 'GSM'},
  {jobName: '甲冑師', jobAbbreviation: 'ARM'},
  {jobName: '鍛冶師', jobAbbreviation: 'BSM'},
  {jobName: '木工師', jobAbbreviation: 'CRP'},
  {jobName: '呪術士', jobAbbreviation: 'THM'},
  {jobName: '幻術士', jobAbbreviation: 'CNJ'},
  {jobName: '弓術士', jobAbbreviation: 'ARC'},
  {jobName: '槍術士', jobAbbreviation: 'LNC'},
  {jobName: '斧術士', jobAbbreviation: 'MRD'},
  {jobName: '格闘士', jobAbbreviation: 'PGL'},
  {jobName: '剣術士', jobAbbreviation: 'GLA'}
]

/* APIアクセスURL */
// export const BEEF_API: string = 'http://beeftongue551.top:8080/'
export const BEEF_API: string = 'http://localhost:8080/'
export const UNIVERSALIS_API_URL: string ='https://universalis.app/api/v2/'
export const XIV_API_URL: string = 'https://xivapi.com/'

// ローカルストレージキー
export const FAVORITE_ITEM_LIST_KSY = 'favoriteItemList'

/* デフォルトデータ */
export const DEFAULT_ITEM_DATA: ItemDataType = {
  equipRestriction: false,
  equipSlotCategory: "",
  itemSearchCategory: "",
  itemSortCategory: 0,
  marketable: false,
  equipLevel: 0,
  itemId: 0,
  itemUICategory: "",
  itemIcon: "",
  itemLevel: "",
  itemName: "",
  classJobCategory: "",
  recipeId: 0
}