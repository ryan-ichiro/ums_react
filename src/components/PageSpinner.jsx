import { Spinner } from "react-bootstrap";
import useLoadingStore from "../stores/LoadingStore";

function PageLoading() {
  const { loadingVal } = useLoadingStore()

  return (
    loadingVal > 0 &&
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999 // Ensure it stays on top
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default PageLoading
