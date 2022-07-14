import Icons from "../../Svg/Icons";

function ToastAlert({ toastRef, icon, title, children }) {
  return (
    <>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          ref={toastRef}
          className="toast border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header text-bg-dark">
            <div>
              {icon ? (
                <div>
                  <Icons icon={icon} size={20} className="me-2 fill-primary" />
                </div>
              ) : (
                <div
                  className="spinner-border spinner-border-sm me-2 text-light"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
            <strong className="me-auto">{title}</strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">{children}</div>
        </div>
      </div>
    </>
  );
}

export default ToastAlert;
