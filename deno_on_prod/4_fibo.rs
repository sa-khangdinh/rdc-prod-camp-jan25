fn fibo(n: u64) -> u64 {
    if n <= 1 {
        return n;
    }
    fibo(n - 1) + fibo(n - 2)
}

fn main() {
    let args = std::env::args().collect::<Vec<_>>();
    let num = args[1].parse::<u64>().unwrap();
    println!("fibo({}) is {:?}", num, fibo(num));
}
