// import React, { Component } from 'react'
// import { withApollo } from 'react-apollo'
// import gql from 'graphql-tag';
// import Link from './Link'
//
// const SEARCH_QUERY = gql`
//   query SearchQuery($search: String!) {
//     apartments(search: $search) {
//       id
//       title,
//       rooms,
//       amenities,
//       price,
//       rules,
//       accessibility,
//       description,
//       owner,
//       createdAt,
//       mainImg
//     }
//   }
// `;
//
// class Search extends Component {
//   constructor() {
//     super();
//     this.state = {
//       links: [],
//       filter: ''
//     };
//   }
//
//   async executeSearch() {
//     // ... you'll implement this in a bit
//   }
//
//   render() {
//     return (
//       <div>
//         <div>
//           Search
//           <input
//             type='text'
//             onChange={(e) => this.setState({ filter: e.target.value })}
//           />
//           <button
//             onClick={() => this._executeSearch()}
//           >
//             OK
//           </button>
//         </div>
//         {this.state.links.map((link, index) => <Link key={link.id} link={link} index={index}/>)}
//       </div>
//     );
//   }
// }
//
// export default withApollo(Search)
