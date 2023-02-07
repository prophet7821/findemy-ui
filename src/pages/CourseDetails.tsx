// 
import Description from "../components/CourseDetails/Description";
import { Container, Grid } from "@mui/material";
import DetailHeader from "../components/CourseDetails/DetailHeader";
import Requirements from "../components/CourseDetails/Requirements";
import WhatToLearn from "../components/CourseDetails/WhatToLearn";
import DefaultLayout from "../components/DefaultLayout";
import InstructorDetails from "../components/CourseDetails/InstructorDetails";
import CourseDetailsCard from "../components/CourseDetails/CourseDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../features/course/courseSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const CourseDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.alert);

  useEffect(() => {
    dispatch(getCourse(searchParams.get("course")));
  }, []);

  return (
    <DefaultLayout>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <DetailHeader />
            <Container maxWidth="xl" sx={{ p: 1 }}>
              <Grid container spacing={3} sx={{ my: 3, p: 1 }}>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <WhatToLearn />
                    </Grid>
                    <Grid item xs={12}>
                      <Requirements />
                    </Grid>
                    <Grid item xs={12}>
                      <Description />
                    </Grid>
                    <Grid item xs={12}>
                      <InstructorDetails />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={4}
                  sx={{
                    display: {
                      xs: "none",
                      md: "flex",
                    },
                    position: "absolute",
                    top: "2%",
                    right: "3%",
                  }}
                >
                  <CourseDetailsCard />
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default CourseDetails;
