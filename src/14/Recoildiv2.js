import Recoildiv3 from "./Recoildiv3";
import { AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";
export default function Recoildiv2() {
    const n2 = useRecoilValue(AtomN2)
  return (
    <div>
        Recoildiv2 : n2 = {n2}
        <Recoildiv3 />
    </div>
  )
}

