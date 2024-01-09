import {Routes, Route, Navigate} from 'react-router-dom'
import Home from 'pages/Home'
import PostDetail from 'pages/posts/detail'
import PostList from 'pages/posts/index'
import PostNew from 'pages/posts/new'
import PostEditPage from 'pages/posts/edit'
import ProfilePage from 'pages/profile'
import LoginPage from 'pages/login'
import SignUpPage from 'pages/signup'
import {useState} from 'react'

interface RouterProps {
  isAuthenticated : boolean;
}

export default function Router({isAuthenticated} : RouterProps) {
  //firebase Auth가 인증되었으면 true로 변경해주는 로직 추가
  return (
    <>
  <Routes>
    {isAuthenticated ? (
      <>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<PostList/>}/>
      <Route path="/posts/:id" element={<PostDetail/>}/>
      <Route path="/posts/new" element={<PostNew/>}/>
      <Route path="/posts/edit/:id" element={<PostEditPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      {/* default path설정 :  위에서 정의하지않은 루트 접속할 경우 default path설정한 곳으로 이동하도록 */}
      <Route path="*" element={<Navigate replace to="/"/>}/>
      </>
    ): (
      <>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="*" element={<LoginPage/>}/>
    </>
    )
    }
  </Routes>
    </>
  );
}