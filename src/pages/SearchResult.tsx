// @ts-nocheck
import {
  Box,
  Container,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterButton from "../components/SearchResults/FilterButton";
import CourseCard from "../components/SearchResults/CourseCard";
import FIlterDrawer from "../components/SearchResults/FIlterDrawer";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredCourses,
  getCourseByName,
} from "../features/course/courseSlice";
import { clearState as clearFilterState } from "../features/filter/filterSlice";
import SearchResultSkeleton from "../components/SearchResults/SearchResultSkeleton";
const SearchResult = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterMenu, setFilterMenu] = useState(false);
  const query = searchParams.get("searchQuery");
  const { courses, isSuccess, isError, errorMessage } = useSelector(
    (state: any) => state.course
  );
  const filterState = useSelector((state: any) => state.filter);
  const { loading } = useSelector((state: any) => state.alert);

  useEffect(() => {
    dispatch(getCourseByName(query));
    dispatch(clearFilterState());
    // console.log('This is firing for query')
  }, [query]);

  useEffect(() => {
    dispatch(getFilteredCourses({ name: query, filterState: filterState }));
    // console.log('This is firing for filterState')
  }, [filterState]);

  const toggleFilterMenu = (event: any) => {
    if (event.type === "keydown") {
      return;
    }

    setFilterMenu(!filterMenu);
  };

  return (
    <DefaultLayout>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Box sx={{ my: 3 }}>
          <Typography
            variant="h2"
            noWrap
            sx={{
              fontWeight: "700",
              fontSize: {
                xs: "1.5rem",
                md: "2.5rem",
              },
              lineHeight: "1.2",
              letterSpacing: "-0.05rem",
            }}
          >
            {`Search Result for "${query}"`}
          </Typography>
        </Box>

        <Box sx={{ my: 3 }}>
          <FilterButton variant="outlined" onClick={toggleFilterMenu}>
            <FilterListIcon />
            <Typography
              sx={{
                fontWeight: "700",
              }}
            >
              Filter
            </Typography>
          </FilterButton>
        </Box>

        <Drawer
          anchor="left"
          open={filterMenu}
          onClose={toggleFilterMenu}
          PaperProps={{
            sx: {
              width: "50%",
            },
          }}
        >
          <FIlterDrawer
            toggleFilterMenu={toggleFilterMenu}
            searchQuery={query}
          />
        </Drawer>

        {loading ? (
          <SearchResultSkeleton />
        ) : (
          <Stack divider={<Divider />} spacing={2} sx={{ width: "100%" }}>
            {courses.map((course, index) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </Stack>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default SearchResult;
