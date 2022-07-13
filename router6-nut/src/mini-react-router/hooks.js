import { useContext } from "react";
import { matchRoutes } from "react-router-dom";
import { NavigationContext, RouteContext } from "./Context";

function renderMatches(matches) {
  if (matches == null) {
    return null;
  }

  return matches.reduceRight((outlet, match) => {
    return (
      <RouteContext.Provider
        value={{ outlet, matches }}
        children={match.route.element || outlet}
      />
    );
  }, null);
}
export function useRoutes(routes) {
  const location = useLocation();

  const pathname = location.pathname;

  const matches = matchRoutes(routes, { pathname });
  // console.log("matches", matches); //sy-log

  return renderMatches(matches);
}

// export function useRoutes(routes) {
//   const location = useLocation()
//   const pathname = location.pathname;

//   return routes.map((route) => {
//     const match = pathname.startsWith(route.path);
//     // 匹配当前路由
//     return match && route.children.map((child) => {
//       // 匹配下面的子路由
//       let m = normalizePathname(child.path) === pathname
//       return (
//         m && (
//           <RouteContext.Provider
//             value={{ outlet: child.element }}
//             children={
//               route.element !== undefined ? route.element : <Outlet />
//             }
//             key={Math.random()}
//           />
//         )
//       );
//     })
//   });
// }
export function useNavigate() {
  const { navigator } = useContext(NavigationContext);

  return navigator.push;
}
export function useLocation(){
  const {location} = useContext(NavigationContext);

  return location
}
export function useOutlet(){
  const { outlet } = useContext(RouteContext);
  return outlet;
}
export function useParams(){
  const {matches} = useContext(RouteContext)
  const routeMatch = matches.at(-1)
  return routeMatch ? routeMatch.params : {};
}