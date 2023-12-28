"use client"
import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const BackArrow = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="flex items-center justify-center w-12 h-12 border hover:bg-gray-100 cursor-pointer rounded-md"
    >
      <FaArrowLeft className="w-6 h-6" />
    </div>
  )
}

export default BackArrow;
