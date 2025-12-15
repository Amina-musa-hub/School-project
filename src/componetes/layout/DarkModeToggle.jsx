import { useState, useEffect } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";


export default function DarkModeToggle() {
  // الحالة تعتمد على ما تم حفظه مسبقاً في localStorage
  const [isDark, setIsDark] = useState(() => {
    // قراءة القيمة من localStorage عند تحميل الصفحة
    const saved = localStorage.getItem("dark-mode");
    return saved ? JSON.parse(saved) : false; // false تعني وضع فاتح افتراضي
  });

  // عند تغيير الحالة، نحدث كلاس 'dark' و localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <button
      onClick={toggleDarkMode}
      className=" h-10 w-10 pt-2 text-center flex justify-center text-2xl rounded-full bg-blue-900 text-red-500 dark:bg-yellow-300 dark:text-gray-800   transition-colors duration-300"
    >
      {isDark ? <CiDark />: <CiLight />}
    </button>
  );
}
