import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/header';
//import ToolBar from './searchForm/searchForm';
import ContactList from './movieList/movieList';
import EditForm from './movieInfoPage/movieInfoPage';
import Page404 from './errorPage/404';

const App = () => (
  <div className="container">
    <Header />
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <ContactList />
            </main>
          )}
        />
        <Route path="/add-new" render={() => (<EditForm title="Add contact" />)} />
        <Route path="/edit/:id" render={() => (<EditForm title="Edit contact" />)} />
        <Route component={Page404} />
      </Switch>
    </Router>
  </div>
);

export default App;

// export default class App extends React.Component {
//
//   render() {
//     return (
//       <div className="container">
//         <Header />
//         <Router>
//           <Switch>
//             <Route
//               exact
//               path="/"
//               render={() => (
//                 <main>
//                   <ContactList />
//                 </main>
//               )}
//             />
//             <Route path="/add-new" render={() => (<EditForm title="Add contact" />)} />
//             <Route path="/edit/:id" render={() => (<EditForm title="Edit contact" />)} />
//             <Route component={Page404} />
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }
