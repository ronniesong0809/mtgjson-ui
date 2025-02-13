import { MainNav } from "./main-nav"
import { Navig } from "./navig"
import { UserNav } from "./user-nav"

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav></MainNav>
        <Navig></Navig>
        <div className="ml-auto flex items-center space-x-4">
          {/* <Search /> */}
          <UserNav />
        </div>
      </div>
    </div>
  )
}
