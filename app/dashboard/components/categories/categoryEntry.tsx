import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { useCategoriesContext } from '@/contexts/categoriesContext'
import { useDeletionDialog } from '@/contexts/deletionContext'
import { useNotification } from '@/contexts/notificationContext'
import { useCategories } from '@/hooks/categories'
import Link from 'next/link'

type EntryProps = {
  id: string,
  name: string,
  href: string,
};

const CategoryEntry = ({
  id,
  name,
  href
}: EntryProps) => {
  const { showDeletionDialog } = useDeletionDialog();
  const { showNotification } = useNotification();
  const { removeCategoryFromList } = useCategoriesContext();
  const { deleteCategory } = useCategories();

  const onAction = async () => {
    try {
      await deleteCategory(id)
      removeCategoryFromList(id)

      showNotification({
	message: "Successfully deleted category",
	type: "success"
      });
    } catch (error: any) {
      const errorMessage = error instanceof Error ?
        error.message :
	"Unknown error";

      showNotification({
	message: errorMessage,
	type: "error"
      });
    }
  };

  const handleDeletion = () => {
    showDeletionDialog(onAction);
  };

  return (
    <div className="grid grid-cols-3 font-medium gap-4 px-6 py-4 bg-white border rounded-lg items-center">
      <div className="flex items-center gap-x-3">
	<input
	  type="checkbox"
	  className="flex-shrink-0 w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
	/>
	<div className="truncate text-md text-gray-600">
	  {name}
	</div>
      </div>

      <div className="w-[200px]">
	<div className="text-md text-gray-600">
	  {href}
	</div>
      </div>

      <div className="flex gap-x-3 justify-end items-center">
        <Link href={`/dashboard/categories/edit?id=${encodeURIComponent(id)}`}>
	  <FiEdit className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
	</Link>
	<div onClick={handleDeletion}>
	  <FaRegTrashAlt className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
	</div>
      </div>
    </div>
  )
}

export default CategoryEntry;
