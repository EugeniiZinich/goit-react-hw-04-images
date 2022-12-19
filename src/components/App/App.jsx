import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from '../Searchbar/Searchbar';
import FetchPicture from 'services/ApiSevise/FetchPicture';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import { Container } from 'components/Container/Container.style';
import MyLoader from 'components/Loader/Loader';

export default function App() {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [picture, setPicture] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (value === '') {
      return;
    }
    const getPicture = async () => {
      try {
        setIsLoading(true);

        const response = await FetchPicture(value, page);
        setPicture(prevState => [...prevState, ...response]);

        if (response.length > 0) {
          setShowBtn(true);
        }
      } catch {
        toast.error('Ooops, try restart page');
      } finally {
        setIsLoading(false);
      }
    };

    getPicture();
  }, [page, value]);

  const onSubmit = value => {
    setValue(value);
    setPage(1);
    setPicture([]);
    setShowBtn(false);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
    setShowBtn(false);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery gallery={picture} />
      <Container>
        {showBtn && <Button loadMore={loadMore} />}
        {isLoading && <MyLoader />}
      </Container>

      <Toaster />
    </>
  );
}

// export default class App extends Component {
//   state = {
//     value: '',
//     page: 1,
//     picture: [],
//     showModal: false,
//     isLoading: false,
//     showBtn: false,
//   };

//   async componentDidUpdate(_, prevState) {
//     const { value, page } = this.state;

//     if (
//       prevState.value !== this.state.value ||
//       prevState.page !== this.state.page
//     ) {
//       try {
//         this.setState({
//           isLoading: true,
//         });
//         const response = await FetchPicture(value, page);
//         this.setState(prevState => ({
//           picture: [...prevState.picture, ...response],
//         }));
//         if (response.length > 0) {
//           this.setState({
//             showBtn: true,
//           });
//         }
//       } catch {
//         toast.error('Ooops, try restart page');
//       } finally {
//         this.setState({
//           isLoading: false,
//         });
//       }
//     }
//   }

//   onSubmit = value => {
//     this.setState({
//       value,
//       page: 1,
//       picture: [],
//     });
//   };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       showBtn: false,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.onSubmit} />
//         <ImageGallery gallery={this.state.picture} />
//         <Container>
//           {this.state.showBtn && <Button loadMore={this.loadMore} />}
//           {this.state.isLoading && <MyLoader />}
//         </Container>

//         <Toaster />
//       </>
//     );
//   }
// }
