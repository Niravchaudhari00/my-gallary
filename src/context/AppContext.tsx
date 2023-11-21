import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL: string = import.meta.env.VITE_REACT_BASE_URL;

export interface Post {
  title: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  content: string;
  id: string;
  img: string;
}

export interface initialState {
  posts: Post[];
  page: number;
  totalPages: number;
  loading: number;
  handlePageChange: (page: number) => void;
  fetchPost: (
    page: number,
    tag?: string | null,
    category?: string | null
  ) => void;
}

const initState: initialState = {
  posts: [],
  page: 1,
  totalPages: 0,
  loading: 0,
  handlePageChange: () => {},
  fetchPost: () => {},
};
export const AppContext = createContext(initState);

export const AppContextProvider = ({ children }: { children: any }) => {
  const [posts, setPost] = useState<Post[]>([]);
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<number>(0);

  const fetchPost = async (
    page: number = 1,
    tag?: string | null,
    category?: string | null
  ) => {
    let url = `${BASE_URL}?page=${page}`;

    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    setLoading(20);
    try {
      const resp = await axios.get(url);
      if (resp.data.success) {
        throw new Error(resp.data.message);
      }
      setTotalPages(resp.data.totalPages);
      setPage(resp.data.page);
      setPost(resp.data.posts);
    } catch (error) {
      console.log("error: ", error);
      setTotalPages(0);
      setPage(1);
      setPost([]);
    }
    setLoading(100);
  };

  // handle page change
  const handlePageChange = (page: number) => {
    navigate({ search: `?page=${page}` });
    setPage(page);
  };
  return (
    <AppContext.Provider
      value={{ posts, loading, handlePageChange, page, totalPages, fetchPost }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
