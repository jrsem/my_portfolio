export default function Loading() {
    return (
      <div className="fixed inset-0 flex bg-white items-center justify-center bg-opacity-100">
        <div className="animate-spin h-12 w-12 border-t-4 border-secondColor rounded-full" />
      </div>
    );
  }