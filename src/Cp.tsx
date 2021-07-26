// import React, { ComponentProps } from 'react'; 
// import { bindActionCreators, Dispatch } from "redux";
// import { connect, ConnectedComponent } from "react-redux";
// import { RouteComponentProps } from 'react-router-dom';

// /** 路由 Props */
// type RouteProps = RouteComponentProps<{ routeId: string }>;
// /** 组件属性 */
// interface IOwnProps {
//   ownId: number;
// }
// /** Redux Store Props */
// type StateProps = ReturnType<typeof mapStateToProps>;
// function mapStateToProps(state: {}) {
//   return {
//     reduxId: 1
//   };
// }
// /** Redux Actions Props */
// type DispatchProps = ReturnType<typeof mapDispatchToProps>;
// function mapDispatchToProps(dispatch: Dispatch) {
//   return {
//     actions: bindActionCreators({
//       doSomething: () => void 0
//     }, dispatch),
//   };
// }
// /*start*/
// /** 最终 Props */
// type CpProps = IOwnProps & RouteProps & StateProps & DispatchProps;
// export const OriginalCp = (props: CpProps) => {
//   const {
//     match: { params: { routeId } }, // 路由 Props
//     reduxId, // Redux Props
//     ownId, // 组件 Props
//     actions: {
//       doSomething // Action Props
//     },
//   } = props;
//   return null;
// };
// /*end*/
// const ConnectedCp: React.ComponentType<IOwnProps> = connect<StateProps, DispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(OriginalCp as React.ComponentType<IOwnProps>);

// const ConnectedCpJSX = <ConnectedCp ownId={1} />

// type P = ComponentProps<typeof ConnectedCp>;

// interface IHOCProps { injectId: number; }
// interface IOwnProps { ownId: number; }
// const hoc = <C extends React.ComponentType<any>>(cp: C) => cp;
// const InjectedCp1 = hoc(OriginalCp as React.ComponentType<IOwnProps>);
// const InjectedCp2 = hoc(OriginalCp as React.ComponentType<Omit<IHOCProps & IOwnProps, 'injectId'>>); 



// // React.ComponentType<P> = React.ComponentClass<P> | React.FunctionComponent<P>;

// // interface IEProps {
// //   Cp?: React.ComponentClass<{ id?: number }>;
// // }
// // interface IEState { id: number; }
// // const ClassCp: React.ComponentClass<IEProps, IEState> = class ClassCp extends React.Component<Readonly<IEProps>, Readonly<IEState>> {
// //   public state: Readonly<IEState> = { id: 1 };
// //   render() {
// //     const { Cp } = this.props as Required<IEProps>;
// //     return <Cp id={`${this.state.id}`} />; // ts(2322)
// //   }
// //   static defaultProps: Partial<IEProps> = {
// //     Cp: class extends React.Component { render = () => null }
// //   }
// // }


// // class ClassCpWithModifier extends React.Component<Readonly<IEProps>, Readonly<IEState>> {
// //   private gid: number = 1;
// //   public state: Readonly<IEState> = { id: 1 };
// //   render() { return this.state.id = 2; } // ts(2540)
// // }

// // interface IEProps { id?: number; }
// // const ExplicitFC: React.FC<IEProps> = props => <>{props.id}</>; // ok
// // ExplicitFC.defaultProps = { id: 1 } // ok id must be number
// // const ExplicitFCEle = <ExplicitFC id={1} />; // ok id must be number
// // const ExplicitFCWithError: React.FC<IEProps> = props => <>{props.id2}</>; // ts(2399)
// // ExplicitFCWithError.defaultProps = { id2: 1 } // ts(2332)
// // const thisIsJSX2 = <ExplicitFCWithError id2={2} />; // ts(2332)

// // function ImplicitFCReturnNull() { return null; } // ok
// // ImplicitFCReturnNull.defaultProps = { id: 1 } // ok id must be number
// // const ImplicitFCReturnNullEle = <ImplicitFCReturnNull id={1} />; // ok id must be number
// // const ImplicitFCReturnJSX = () => <></>; // ok
// // ImplicitFCReturnJSX.defaultProps = { id2: 1 } // ok
// // const ImplicitFCReturnJSXEle = <ImplicitFCReturnJSX id2={2} />; // ok
export const NotAFC = (() => [<>1</>, <>2</>, <>3</>]) as unknown as React.VoidFunctionComponent; // 
// // const WithError = <NotAFC />; // ts(2786)

// // class E extends React.Component<Readonly<IEProps>, Readonly<IEState>> {
// //   private gid: number = 1;
// //   public state: Readonly<IEState> = { id: 1 };
// //   render() {
// //     return this.state.id = 2;
// //   }
// // }

// // const thisIsJSX = <E />; // ok

// // interface IEProps { id?: number; }
// // const E: React.FC<IEProps> = (props) => null;
// // E.defaultProps = { id: 1 }
// // const thisIsJSX = <E />; // ok

// // const E2: React.FC<IEProps> = props => props.id2 || null; // ts(2399)
// // E2.defaultProps = { id2: 1 } // ts(2332)
// // const thisIsJSX2 = <E2 id2={2} />; // ts(2332)

// // const E2 = () => null; // ts(2399)
// // const thisIsJSX2 = <E2 />; // ts(2332)


// const C = () => <></>;
// const thisIsJSX: React.ReactElement<typeof C> = <C />; // ok
// const thisIsJSX2: React.ReactNode = <a />; // ok

// // const D = () => [<></>];
// // const throwError = <D />; // ts(2786)

// // export const a = 2;

// // type x = React.ElementType;

// function Test() {
//   const ref1 = React.useRef<HTMLElement>(null!);
//   const ref2 = React.useRef<HTMLElement>(null);
//   const ref3 = React.useRef<HTMLElement | null>(null);
//   // ref2.current = document.getElementById('#d2');
//   ref3.current = document.getElementById('#d2');
// }

// export interface Props {
//   foo: string
//   bar?: boolean
// }

// export const TestClass: React.ComponentClass<Props> = class extends React.Component<Props> {
//   static defaultProps = {
//     foo: '',
//   }

//   render() {
//     return <div />
//   }
// }


export interface IUserItem {
  username: string;
}
export function RenderUser(props: IUserItem): React.ReactElement {
  return <>{props.username}</>
}
export interface ITodoItem {
  taskName: string;
}

// export function RenderToDO(props: ITodoItem): React.ReactElement {
//   return <>{props.taskName}</>
// }
// export function ListCp<Item extends {}>(props: { Cp: React.ComponentType<Item> }): React.ReactElement {
//   return <></>;
// }
// const UserList = <ListCp<IUserItem> Cp={RenderUser} />; // ok
// const TodoList = <ListCp<ITodoItem> Cp={RenderToDO} />; // ok
// const UserListError = <ListCp<ITodoItem> Cp={RenderUser} />; // ts(2322)
// const TodoListError = <ListCp<IUserItem> Cp={RenderToDO} />; // ts(2322)

// const jsx = <div /> as any as React.ElementType;

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'team-statistics': React.DetailedHTMLProps<{ id: string }, HTMLElement>;
//     }
//   }
// }