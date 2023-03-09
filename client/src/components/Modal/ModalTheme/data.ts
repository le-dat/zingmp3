import images from "../../../assets/images";
import { API_URL } from "../../../constants";

const DYNAMIC = [
  {
    themeThumb: images.themeThumb.london,
    containerTheme: `${API_URL}/api/images/london-dark.jpg`,
    playerTheme: "",
    className: "london",
    title: "London",
  },
  {
    themeThumb: images.themeThumb.dark,
    containerTheme: `${API_URL}/api/images/dark.jpg`,
    playerTheme: "",
    className: "dark",
    title: "Sáng Tối",
  },
  {
    themeThumb: images.themeThumb.blue,
    containerTheme: "",
    playerTheme: "",
    className: "blue",
    title: "Xanh da trời",
  },
  {
    themeThumb: images.themeThumb.pink,
    containerTheme: "",
    playerTheme: "",
    className: "pink",
    title: "Hồng",
  },
  {
    themeThumb: images.themeThumb.brown,
    containerTheme: "",
    playerTheme: "",
    className: "brown",
    title: "Nâu",
  },
];

const CHU_DE = [
  {
    themeThumb: images.themeThumb.xone,
    containerTheme: `${API_URL}/api/images/xone.jpg`,
    playerTheme: `${API_URL}/api/images/xone-player.jpg`,
    className: "xone",
    title: "XONE",
  },
  {
    themeThumb: images.themeThumb.zma,
    containerTheme: `${API_URL}/api/images/zma.svg`,
    playerTheme: `${API_URL}/api/images/zma-player.png`,
    className: "zing",
    title: "Zing Music Awards",
  },
  {
    themeThumb: images.themeThumb.eiffel,
    containerTheme: `${API_URL}/api/images/eiffel.jpg`,
    playerTheme: "",
    className: "elffel",
    title: "Tháp Elffel",
  },
];
const GIRL = [
  {
    themeThumb: images.themeThumb.girl1,
    containerTheme: `${API_URL}/api/images/girl1.jpg`,
    playerTheme: "",
    className: "jiChangWook",
    title: "girl 1",
  },
  {
    themeThumb: images.themeThumb.girl2,
    containerTheme: `${API_URL}/api/images/girl2.jpg`,
    playerTheme: "",
    className: "lisa",
    title: "girl 2",
  },
  {
    themeThumb: images.themeThumb.girl3,
    containerTheme: `${API_URL}/api/images/girl3.jpg`,
    playerTheme: "",
    className: "lisa",
    title: "girl 3",
  },
  {
    themeThumb: images.themeThumb.girl4,
    containerTheme: `${API_URL}/api/images/girl4.jpg`,
    playerTheme: "",
    className: "lisa",
    title: "girl 4",
  },
];
const NGHE_SI = [
  {
    themeThumb: images.themeThumb.jack,
    containerTheme: `${API_URL}/api/images/jack.jpg`,
    playerTheme: "",
    className: "jack",
    title: "Jack",
  },
  {
    themeThumb: images.themeThumb.iu,
    containerTheme: `${API_URL}/api/images/iu.jpg`,
    playerTheme: "",
    className: "iu",
    title: "IU",
  },
  {
    themeThumb: images.themeThumb.jiChangWook,
    containerTheme: `${API_URL}/api/images/ji-chang-wook.jpg`,
    playerTheme: "",
    className: "jiChangWook",
    title: "Ji Chang Wook",
  },
  {
    themeThumb: images.themeThumb.lisa,
    containerTheme: `${API_URL}/api/images/lisa.jpg`,
    playerTheme: "",
    className: "lisa",
    title: "Lisa",
  },
  {
    themeThumb: images.themeThumb.jennie,
    containerTheme: `${API_URL}/api/images/jennie.jpg`,
    playerTheme: "",
    className: "jennieKim",
    title: "Jennie Kim",
  },
  {
    themeThumb: images.themeThumb.jisoo,
    containerTheme: `${API_URL}/api/images/jisoo.jpg`,
    playerTheme: "",
    className: "jisoo",
    title: "Jisoo",
  },
  {
    themeThumb: images.themeThumb.rose,
    containerTheme: `${API_URL}/api/images/rose.jpg`,
    playerTheme: "",
    className: "rose",
    title: "Rosé",
  },
];

const MAU_TOI = [
  {
    themeThumb: images.themeThumb.dark,
    containerTheme: "",
    playerTheme: "",
    className: "dark",
    title: "Tối",
  },
  {
    themeThumb: images.themeThumb.purple,
    containerTheme: "",
    playerTheme: "",
    className: "purple",
    title: "Tím",
  },
  {
    themeThumb: images.themeThumb.blue,
    containerTheme: "",
    playerTheme: "",
    className: "blue-bold",
    title: "Xanh Đậm",
  },
  {
    themeThumb: images.themeThumb.blueLight,
    containerTheme: "",
    playerTheme: "",
    className: "blue",
    title: "Xanh Biển",
  },
  {
    themeThumb: images.themeThumb.green,
    containerTheme: "",
    playerTheme: "",
    className: "green",
    title: "Xanh Lá",
  },
  {
    themeThumb: images.themeThumb.brown,
    containerTheme: "",
    playerTheme: "",
    className: "brown",
    title: "Nâu",
  },
  {
    themeThumb: images.themeThumb.pink,
    containerTheme: "",
    playerTheme: "",
    className: "pink",
    title: "Hồng",
  },
  {
    themeThumb: images.themeThumb.red,
    containerTheme: "",
    playerTheme: "",
    className: "red",
    title: "Đỏ",
  },
];

const MAU_SANG = [
  {
    themeThumb: images.themeThumb.light,
    containerTheme: "",
    playerTheme: "",
    className: "light",
    title: "Sáng",
  },
  {
    themeThumb: images.themeThumb.grayLight,
    containerTheme: "",
    playerTheme: "",
    className: "gray-light",
    title: "Xám",
  },
  {
    themeThumb: images.themeThumb.blueLight,
    containerTheme: "",
    playerTheme: "",
    className: "blue-light",
    title: "Xanh Nhạt",
  },
  {
    themeThumb: images.themeThumb.pinkLight,
    containerTheme: "",
    playerTheme: "",
    className: "pink-light",
    title: "Hồng Cánh Sen",
  },
];

const LIST_THEME = [
  { name: "Dynamic", items: DYNAMIC },
  { name: "Chủ Đề", items: CHU_DE },
  { name: "Image Girl =))", items: GIRL },
  { name: "Nghệ Sĩ", items: NGHE_SI },
  { name: "Màu Tói", items: MAU_TOI },
  { name: "Màu Sáng", items: MAU_SANG },
];
export default LIST_THEME;
