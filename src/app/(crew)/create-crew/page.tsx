import FileInputWrap from '@/src/components/common/input/file-input-wrap';

export default function CreateCrewPage() {
  return (
    <div className="container mx-auto my-0 min-h-screen max-w-pc bg-gray-50 py-11 shadow-bg">
      <div className="lg:px-8.5 lg:gap-4.5 flex flex-col gap-3 px-3 md:gap-4 md:px-8">
        <FileInputWrap value={{ image: null }} />
      </div>
    </div>
  );
}
