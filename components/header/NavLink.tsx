import { Link, usePathname } from "expo-router";
import { StyleSheet, View, ViewProps } from "react-native";
import color from "../../shared/constans/color";
interface Props {
  href: string;
  children: React.ReactNode;
}
const NavLink = ({ href, children }: Props) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <View>
      <Link href={href} style={[isActive && style.active, style.link]}>
        {children}
      </Link>
      {isActive && <View style={style.border}></View>}
    </View>
  );
};
const style = StyleSheet.create({
  link: {
    color: color.white,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "transparent",
  },
  border: {
    marginTop: 5,
    backgroundColor: "#cfdab0",
    height: 3,
  },
});
export default NavLink;
