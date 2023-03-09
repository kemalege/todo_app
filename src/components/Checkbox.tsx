import { useEffect, useState} from "react"
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { Note } from "../redux/reducers/notesReducer";

interface CheckboxProps {
  checkDone(id:number):void
  selectedId:number
}
 const Checkbox: React.FC<CheckboxProps> = ({checkDone, selectedId}) => {

  const delay = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }
  const onCheckDoneClick = async () => {
    await delay(100)
    checkDone(selectedId)
  }
  return (
    <label>
      <input className="" checked={checked} type="checkbox" onClick={onCheckDoneClick} onChange={handleCheck} />
    </label>
  );
};
export default Checkbox;