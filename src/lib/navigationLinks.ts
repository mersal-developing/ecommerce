import { NavItem } from "@/lib/types";
import { Home, ShoppingCart, Package, Plus, Users, LineChart } from "lucide-react";

export const NavItems: NavItem[] = [
    { name: "Dashboard", link: "/dashboard", icon: Home },
    { name: "Orders", link: "/dashboard/orders", icon: ShoppingCart },
    {
        name: "Products",
        icon: Package,
        subItems: [
            { name: "Products", link: "/dashboard/products", icon: Package },
            { name: "Add Product", link: "/dashboard/products/add-product", icon: Plus },
        ],
    },
    { name: "Customers", link: "/dashboard/customers", icon: Users, hide: true },
    { name: "Analytics", link: "/dashboard/analytics", icon: LineChart, hide: true },
];