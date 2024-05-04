// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { Button, Container, Form, Table } from 'react-bootstrap';

// function DashBoard() {
//   const [data, setData] = useState([]);
//   const [editId, setEditID] = useState(null);
//   const [inputData, setInputData] = useState({
//     id: '',
//     userId: '',
//     title: '',
//     body: ''
//   });

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => setData(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('https://jsonplaceholder.typicode.com/posts', inputData)
//       .then(res => {
//         setData([ res.data,...data]);
//         setInputData({ id: '', userId: '', title: '', body: '' });
//         alert('Data added successfully');
//       })
//       .catch(err => console.log(err));
//   };

//   const handleEdit = (id) => {
//     setEditID(id);
//     const editData = data.find(item => item.id === id);
//     setInputData(editData);
//   };

//   const handleUpdate = () => {
//     axios.put(`https://jsonplaceholder.typicode.com/posts/${editId}`, inputData)
//       .then(res => {
//         setEditID(null);
//       })
//       .catch(err => console.log(err));
//   };

//   const handleDelete = (deleteID) => {
//     axios.delete(`https://jsonplaceholder.typicode.com/posts/${deleteID}`)
//       .then(() => {
//         const updatedData = data.filter(item => item.id !== deleteID);
//         setData(updatedData);
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <Container>
//       <div className="form-div">
//         <br />
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formId">
//             <Form.Control type="text" value={inputData.id} placeholder="Enter ID" onChange={e => setInputData({ ...inputData, id: e.target.value })} />

//           </Form.Group><br/>
//           <Form.Group controlId="formUserId">
//             <Form.Control type="text" value={inputData.userId} placeholder="Enter User ID" onChange={e => setInputData({ ...inputData, userId: e.target.value })} />
//           </Form.Group><br/>
//           <Form.Group controlId="formTitle">
//             <Form.Control type="text" value={inputData.title} placeholder="Enter Title" onChange={e => setInputData({ ...inputData, title: e.target.value })} />
//           </Form.Group><br/>
//           <Form.Group controlId="formBody">
//             <Form.Control type="text" value={inputData.body} placeholder="Enter Body" onChange={e => setInputData({ ...inputData, body: e.target.value })} />
//           </Form.Group><br/>
//           <div>
//             <Button variant="primary" type="submit">Add</Button>
//             {editId !== null && <Button variant="secondary" onClick={handleUpdate}>Update</Button>}
//           </div>
//         </Form>
//       </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>UserID</th>
//             <th>Title</th>
//             <th>Body</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(entry => (
//             <tr key={entry.id}>
//               <td>{entry.id}</td>
//               <td>{entry.userId}</td>
//               <td>{editId === entry.id ? <Form.Control value={inputData.title} onChange={e => setInputData({ ...inputData, title: e.target.value })} /> : entry.title}</td>
//               <td>{editId === entry.id ? <Form.Control value={inputData.body} onChange={e => setInputData({ ...inputData, body: e.target.value })} /> : entry.body}</td>
//               <td>
//                 {editId === entry.id ? (
//                   <Button variant="success" onClick={handleUpdate}>Save</Button>
//                 ) : (
//                   <>
//                     <Button variant="warning" onClick={() => handleEdit(entry.id)}>Edit</Button>
//                     <Button variant="danger" onClick={() => handleDelete(entry.id)}>Delete</Button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// }

// export default DashBoard;
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Container, Form, Table, Pagination } from 'react-bootstrap';

function DashBoard() {
  const [data, setData] = useState([]);
  const [editId, setEditID] = useState(null);
  const [inputData, setInputData] = useState({
    id: '',
    userId: '',
    title: '',
    body: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(5); // Number of entries to display per page

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', inputData)
      .then(res => {
        setData([res.data, ...data]);
        setInputData({ id: '', userId: '', title: '', body: '' });
        alert('Data added successfully');
      })
      .catch(err => console.log(err));
  };

  const handleEdit = (id) => {
    setEditID(id);
    const editData = data.find(item => item.id === id);
    setInputData(editData);
  };

  const handleUpdate = () => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${editId}`, inputData)
      .then(res => {
        setEditID(null);
      })
      .catch(err => console.log(err));
  };

  const handleDelete = (deleteID) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${deleteID}`)
      .then(() => {
        const updatedData = data.filter(item => item.id !== deleteID);
        setData(updatedData);
      })
      .catch(err => console.log(err));
  };

  // Logic to calculate the index of the first and last entry for the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <div className="form-div">
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formId">
            <Form.Control type="text" value={inputData.id} placeholder="Enter ID" onChange={e => setInputData({ ...inputData, id: e.target.value })} />

          </Form.Group><br />
          <Form.Group controlId="formUserId">
            <Form.Control type="text" value={inputData.userId} placeholder="Enter User ID" onChange={e => setInputData({ ...inputData, userId: e.target.value })} />
          </Form.Group><br />
          <Form.Group controlId="formTitle">
            <Form.Control type="text" value={inputData.title} placeholder="Enter Title" onChange={e => setInputData({ ...inputData, title: e.target.value })} />
          </Form.Group><br />
          <Form.Group controlId="formBody">
            <Form.Control type="text" value={inputData.body} placeholder="Enter Body" onChange={e => setInputData({ ...inputData, body: e.target.value })} />
          </Form.Group><br />
          <div>
            <Button variant="primary" type="submit">Add</Button>
            {editId !== null && <Button variant="secondary" onClick={handleUpdate}>Update</Button>}
          </div>
        </Form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.userId}</td>
              <td>{editId === entry.id ? <Form.Control value={inputData.title} onChange={e => setInputData({ ...inputData, title: e.target.value })} /> : entry.title}</td>
              <td>{editId === entry.id ? <Form.Control value={inputData.body} onChange={e => setInputData({ ...inputData, body: e.target.value })} /> : entry.body}</td>
              <td>
                {editId === entry.id ? (
                  <Button variant="success" onClick={handleUpdate}>Save</Button>
                ) : (
                  <>
                    <Button variant="warning" onClick={() => handleEdit(entry.id)}>Edit</Button>
                    <Button variant="danger" onClick={() => handleDelete(entry.id)}>Delete</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: Math.ceil(data.length / entriesPerPage) }, (_, i) => (
          <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
}

export default DashBoard;
