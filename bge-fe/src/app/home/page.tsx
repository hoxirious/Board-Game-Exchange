import { BGEAdvancedSearchComponent } from "@/components/bge-advanced-search"
import Cookies from 'js-cookie';

const page = () => {
    const userId = Cookies.get('userId');

    console.log(userId);
    return (
        <div>
            Home Page
            <section className="mx-auto md:w-[600px] lg:w-[1024px]">
                <input className="w-full p-2 text-base border rounded" placeholder="Search"></input>
                <div className="absolute inset-0 md:relative">
                    <BGEAdvancedSearchComponent />
                </div>
            </section>
        </div>
    );
}

export default page;
