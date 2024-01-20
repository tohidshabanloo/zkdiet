import React from "react";

const Author = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-2">
            <img
              src="https://source.unsplash.com/random"
              alt="Author's Photo"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h1 className="text-3xl font-bold mb-4">Ghazli Diet</h1>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida est sed vehicula gravida. Sed vitae diam mauris. Nullam ac
              leo risus. Fusce lorem arcu, lobortis eu tellus id, consequat
              sodales tortor. Aliquam erat volutpat. Integer posuere, justo eget
              lacinia dignissim, turpis mi porttitor mauris, quis feugiat nunc
              diam nec justo. Sed suscipit laoreet mi, a sollicitudin nisl
              pretium id. Sed malesuada enim nec lectus feugiat lobortis.
              Pellentesque sit amet lorem quis enim fringilla pulvinar vitae sed
              mi. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
