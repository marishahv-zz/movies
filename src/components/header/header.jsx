// import React from 'react';
//
// const Header = () => (
//   <header className="jumbotron">
//     <h1 className="display-4">Contact List</h1>
//     <hr className="my-4" />
//   </header>
// );
//
// export default Header;

import React from 'react';
import './header.scss';
import Logo from '../common/logo/logo';
import SearchForm from '../searchForm/searchForm';
// import Filter from '../filter/filter';

// export default class Header extends React.PureComponent {
//   render() {
//     return (
//       <div className="header">
//         <Logo />
//         <SearchForm />
//         <div>
//           <Filter />
//         </div>
//       </div>
//     );
//   }
// }

const header = () => (
  <div className="header">
    <Logo />
    <SearchForm />
    {/*<div>*/}
    {/*  <Filter />*/}
    {/*</div>*/}
  </div>
);

export default header;
