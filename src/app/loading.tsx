export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#003366]" />
        <p className="mt-4 text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
} 