function ProjectLayout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default ProjectLayout;
