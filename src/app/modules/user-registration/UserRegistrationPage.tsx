import {PageLink, PageTitle} from '../../../layout/core'
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { Horizontal } from './components/Horizontal';


const registrationBreadCrumbs: Array<PageLink> = [
    {
      title: 'User Registration',
      path: '/social-meedia/user-registration/registration',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]

const UserRegistrationPage = () => {
    return (
        <Routes>
          <Route element={<Outlet />}>
            <Route
              path="registration"
              element={
                <>
                  <PageTitle breadcrumbs={registrationBreadCrumbs}>Registration</PageTitle>
                  <Horizontal/>
                </>
              }
            />
          </Route>
          <Route index element={<Navigate to="/social-meedia/user-registration/registration" />} />
        </Routes>
      );
  
}

export default UserRegistrationPage
