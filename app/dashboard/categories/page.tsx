import Button from '@/components/button'
import StatisticWidget from '@/dashboard/components/statisticWidget'
import ProductsList from '@/dashboard/components/productsList'

const DashboardPage = () => {
  return (
    <div className="flex flex-col w-full p-12 gap-y-6">
      <div className="flex items-center w-full justify-between">
	<h1 className="text-3xl font-bold">
	  Kategorier
	</h1>

	<Button
	  actionText="Lägg Till"
	  className="text-lg px-6 py-3"
	  href="/dashboard/new-product"
	/>
      </div>

      <div className="flex justify-between">
        <StatisticWidget
	  title="Antal Kategorier"
	  value={0}
	/>
      </div>

      <div className="flex flex-col pt-3">
        <label className="font-bold text-2xl">
	  Alla Kategorier
	</label>
        <label className="text-xl font-medium text-gray-600">
	  Du tittar på alla kategorier
	</label>
      </div>

      <ProductsList />
    </div>
  )
}

export default DashboardPage;
