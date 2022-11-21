import React from "react";
import TodoForm from "../components/TodoForm";
import Table from "../components/Table";
import { useSelector } from "react-redux";
import Tab from "../components/Tab";
import Panel from "../components/Panel";
import TodoList from "../components/TodoList";
function HomePage() {
  const isLoadingFirst = useSelector((state) => state.todo.isLoadingFirst);
  const { isLoading } = useSelector((state) => state.todo);

  return (
    <>
      {isLoadingFirst ? (
        <div className=" w-full container">
          <iframe
            height={500}
            className="w-full text-center"
            src="https://embed.lottiefiles.com/animation/93816"
          ></iframe>
          <h1 className="text-center"> Sayfa Yükleniyor... </h1>
        </div>
      ) : (
        <div className="w-full h-full container flex-col justify-center items-center">
          <h1 className="text-center text-slate-500 font-bold"> Todo App</h1>
          <div>
            <TodoForm></TodoForm>
          </div>
          <div>
            <Tab>
              <Panel title="Tamamlananlar"></Panel>
              <Panel title="Tamamlanacaklar"></Panel>
            </Tab>
            <TodoList></TodoList>
          </div>

          {isLoading ? (
            <iframe
              className="w-full text-center"
              src="https://embed.lottiefiles.com/animation/103617"
              title="loading"
            ></iframe>
          ) : (
            <div className="w-full btn btn-secondary">
              Daha fazla Veri Yükle
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default HomePage;
