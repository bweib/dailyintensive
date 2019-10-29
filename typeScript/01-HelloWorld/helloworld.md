# 1.初始化项目：进入你的编程文件夹后，可以使用npm init -y来初始化项目，生成package.json文件。
# 2.创建tsconfig.json文件:在终端中输入tsc --init：它是一个TypeScript项目的配置文件，可以通过读取它来设置TypeScript编译器的编译参数。
# 3.安装@types/node,使用npm install @types/node --dev-save进行安装。这个主要是解决模块的声明文件问题。
# 4.编写HelloWorld.ts文件，然后进行保存
# 5.在Vscode的任务菜单下，打开运行生成任务，然后选择tsc：构建-tsconfig.json，这时候就会生成一个helloWorld.js文件
# 6.在终端中输入node helloWorld.js就可以看到结果了。