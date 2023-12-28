import Button from '@/components/button'
import StatisticWidget from '@/dashboard/components/statisticWidget'
import CategoriesList from '@/dashboard/components/categories/categoriesList'

const DashboardCategoriesPage = () => {
  return (
    <div className="flex flex-col w-full p-12 gap-y-6">
      <div className="flex items-center w-full justify-between">
	<h1 className="text-3xl font-bold">
	  Kategorier
	</h1>

	<Button
	  actionText="Lägg Till"
	  className="text-lg px-6 py-3"
	  href="/dashboard/categories/new"
	/>
      </div>

      <CategoriesList />
    </div>
  )
}

export default DashboardCategoriesPage;
