import { Helmet } from "react-helmet-async";
import Heading from "../Components/Heading";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  
} from "recharts";
import { useContext } from "react";
import { ProductsContext } from "../Layout/MainLayout";

const Statistics = () => {
  const allProducts = useContext(ProductsContext);

  return (
    <div>
      <Helmet>
        <title>Statistics || Gadget Heaven</title>
      </Helmet>
      <div className="bg-primary mb-8 md:mb-10 lg:mb-[48px]">
        <Heading headingText="Statistics" headingTagName="h2" />
      </div>
      <div className="container">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-5 md:mb-6 lg:mb-8">
          Statistics
        </h2>
        {/* Chart */}
        <div className="container h-[509px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={400}
              data={allProducts}
              margin={{
                top: 20,
                right: 0,
                bottom: 20,
                left: 0,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="product_title" />
              <YAxis dataKey="price" />
              <Tooltip />
              <Legend />
               
              <Area
                type="monotone"
                dataKey="price"
                fill="#EFE1FB"
                stroke="#EFE1FB"
              />
              <Bar dataKey="price" barSize={32} fill="#9538E2" />
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
